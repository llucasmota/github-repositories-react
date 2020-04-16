/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, FilterIssues } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
    enabled: 0,
    filterIssues: [
      { state: 'all', textLabel: 'Todos' },
      { state: 'open', textLabel: 'Abertos' },
      { state: 'closed', textLabel: 'Fechados' },
    ],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filterIssues, enabled } = this.state;

    console.log(enabled);

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        state: 'open',
        per_page: 5,
      }),
    ]);
    console.log(filterIssues[enabled].state);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
      enabled: 0,
    });
  }

  laodIssuesByCatebory = async () => {
    const { match } = this.props;
    const { filterIssues, enabled } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      state: filterIssues[enabled].state,
      per_page: 5,
    });
    this.setState({
      issues: response.data,
      loading: false,
      enabled: 0,
    });
  };

  handleFilterIssues = async index => {
    await this.setState({
      enabled: index,
    });
    this.laodIssuesByCatebory();
  };

  render() {
    const { repository, issues, loading, filterIssues, enabled } = this.state;
    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <FilterIssues enabled={enabled}>
          {filterIssues.map((filterIndex, index) => (
            <button
              type="button"
              key={filterIndex.state}
              id={index}
              onClick={() => this.handleFilterIssues(index)}
            >
              {filterIndex.textLabel}
            </button>
          ))}
        </FilterIssues>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
