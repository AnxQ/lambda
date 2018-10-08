import React, {Component} from 'react';
import {Carousel, ListView, List, Card, WingBlank, WhiteSpace} from 'antd-mobile';
import lambdaLogo from "./lambda.svg";
import githubLogo from "./github.svg"

class InfoPage extends Component {

    render() {
        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg"/>
                    <Card>
                        <Card.Header
                            title="关于本社团"
                            thumb={<img className="Thumb-logo" src={lambdaLogo} alt=""/>}
                            extra={<span>...毕竟是新成立的</span>}
                        />
                        <Card.Body>
                            <div></div>
                        </Card.Body>
                        {/*<Card.Footer content="footer content" extra={<div>extra footer content</div>} />*/}
                    </Card>
                    <WhiteSpace size="lg"/>
                </WingBlank>
                <WingBlank size="lg">
                    <WhiteSpace size="lg"/>
                    <Card>
                        <Card.Header
                            title="关于本社团"
                            thumb={<img className="Thumb-logo" src={lambdaLogo} alt=""/>}
                            extra={<span>...毕竟是新成立的</span>}
                        />
                        <Card.Body>
                            <div></div>
                        </Card.Body>
                        {/*<Card.Footer content="footer content" extra={<div>extra footer content</div>} />*/}
                    </Card>
                    <WhiteSpace size="lg"/>
                </WingBlank>
                <WingBlank size="lg">
                    <List renderHeader={() => "Source Code (GitHub)"}>
                        <List.Item
                            thumb={<img src={githubLogo}/>}
                            arrow="horizontal"
                            onClick={() => {window.location.href="https://github.com/AnxQ/lambda"}}
                        >
                            Lambda
                        </List.Item>
                        <List.Item
                            thumb={<img src={githubLogo}/>}
                            arrow="horizontal"
                            onClick={() => {window.location.href="https://github.com/AnxQ/lambda-api"}}
                        >
                            Lambda API
                        </List.Item>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default InfoPage;