// Packages
import React from "react"
import { Link } from "react-router-dom"
import { Font } from "tsx-library-julseb"

// Components
import Page from "../components/Page"

const NotFound: React.FC = () => {
    return (
        <Page title="404">
            <Font.H1>Page not found!</Font.H1>

            <Font.P>
                <Link to="/">Back to homepage.</Link>
            </Font.P>
        </Page>
    )
}

export default NotFound
