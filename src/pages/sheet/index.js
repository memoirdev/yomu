import React from "react";
import { Readability } from "@mozilla/readability";
import styles from "./index.module.scss";

class Sheet extends React.Component {
  state = {
    article: { title: "", content: "", excerpt: "", byline: "", dir: "" },
  };

  componentDidMount() {
    const clonedDocument = document.cloneNode(true);
    const article = new Readability(clonedDocument).parse();
    this.setState({
      article,
    });
  }

  render() {
    const { article } = this.state;
    return (
      <div className={styles.yomu}>
        <div>{article.title}</div>
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
    );
  }
}

export default Sheet;
