import { Component } from "react"

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '0a283e',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    constainer: {
        width: '1200px',
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.constainer}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout