import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
`;
export const FilterIssues = styled.div.attrs(props => ({
  enabled: props.enabled,
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  border-top: 1px solid #eee;
  padding-top: 30px;
  margin-left: 30px;

  button {
    background: #f5f5f5;
    border-radius: 4%;
    border: 1px solid #7159c1;
    width: 10vw;
    height: 6vh;
    margin-right: 10px;
    text-align: center;
    &:nth-child(${props => props.enabled + 1}) {
      background: #7159c1;
      opacity: 0.7;
      color: #f5f5f5;
    }
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;
          &:hover {
            color: #7159c1;
          }
        }
        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const PaginationComponent = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  button {
    border-radius: 5px;
    margin-left: 5px;
    margin-right: 5px;
    color: #7159c1;
    background: #fff;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;
