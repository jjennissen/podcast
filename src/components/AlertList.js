import React from 'react';
import Box from "@material-ui/core/Box";

export default class AlertList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch('/posts.json')
            .then(res => res.json())
            //.then(res => res.text())
            //.then(text => console.log(text))
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result.posts
                    }
                    );
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <Box component="span" border={1} bgcolor="primary.main" m={1} p={1} paddingLeft={5} paddingRight={5}>
                <ul>
                    {posts.map(posts => (
                        <li key={posts.title}>
                            {posts.title}
                        </li>

                    ))}
                </ul>
            </Box>;
        }
    }
}