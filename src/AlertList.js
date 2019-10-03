import React from 'react';
import Box from "@material-ui/core/Box";

export default class AlertList extends React.Component {
    render() {
        return <Box component="span" border={1} bgcolor="primary.main" m={1} p={1} paddingLeft={5}
                    paddingRight={5}>
            Alert! {this.props.title}
            <p></p>
            {this.props.summary}
        </Box>;
    }
}