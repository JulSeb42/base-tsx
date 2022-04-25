// Packages
import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Burger, Variables } from "tsx-library-julseb"

// Data
import siteData from "../data/siteData"

// Types
interface linkProps extends React.HTMLAttributes<HTMLElement> {
    logo?: boolean
    as?: any
}

interface navProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean
}

interface props {}

// Styles
const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Spacers.M} 5vw;
    position: relative;
`

const NavItem = styled(NavLink)<linkProps>`
    text-decoration: none;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};
    padding: 0;
    border: none;
    background: none;
    font-size: ${Variables.FontSizes.Body};

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }

    &.active {
        font-weight: ${Variables.FontWeights.Black};
    }

    ${props =>
        props.logo &&
        css`
            font-weight: ${Variables.FontWeights.Black};
        `}
`

const MenuButton = styled(Burger)`
    display: none;
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Mobile} {
        display: inline;
    }
`

const Nav = styled.nav<navProps>`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Spacers.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        left: 0;
        width: 100%;
        top: ${props => (props.open ? "56px" : "-200px")};
        padding: ${Variables.Spacers.XS} 5vw;
        z-index: 999;
        background-color: ${Variables.Colors.White};
        transition: ${Variables.Transitions.Short};

        & > *:not(:last-child) {
            margin-right: 0;
            margin-bottom: ${Variables.Spacers.XS};
        }
    }
`

const Header: React.FC<props> = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <NavItem as={Link} to="/" logo>
                {siteData.name}
            </NavItem>

            <MenuButton
                width={28}
                height={20}
                onClick={() => setIsOpen(!isOpen)}
                color="currentColor"
                open={isOpen}
            />

            <Nav open={isOpen}>
                <NavItem to="/">Homepage</NavItem>
            </Nav>
        </Container>
    )
}

export default Header
