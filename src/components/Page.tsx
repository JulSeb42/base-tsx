// Packages
import React, { HTMLAttributes } from "react"
import { Helmet, Wrapper, Main } from "tsx-library-julseb"

// Components
import Header from "./Header"

// Data
import siteData from "../data/siteData"

// Types
interface props extends HTMLAttributes<HTMLElement> {
    title: string
    description?: string
    keywords?: string
    cover?: string
    template?: string
}

const Page: React.FC<props> = props => {
    return (
        <>
            <Helmet
                title={`${props.title} | ${siteData.name}`}
                description={props.description}
                keywords={[siteData.keywords, props.keywords]}
                siteName={siteData.name}
                favicon={siteData.favicon}
                author={siteData.author}
                type={siteData.type}
                cover={props.cover || siteData.cover}
                language={siteData.language}
            />

            <Header />

            <Wrapper template={props.template}>
                <Main template={props.template}>{props.children}</Main>
            </Wrapper>
        </>
    )
}

export default Page
