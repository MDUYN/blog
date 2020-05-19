import React from "react";
import styled from "styled-components";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Layout, {
    Root,
    getHeader,
    getDrawerSidebar,
    getSidebarTrigger,
    getSidebarContent,
    getCollapseBtn,
    getContent,
    getInsetFooter,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./theme";
import HeaderContent from "./HeaderContent";
import SideNavContent from "./SideNavContent";
import SideNavHeaderContent from "./SideNavHeaderContent";
import ReadingListOverview from "./views/ReadingListOverview";
import ArticleView from "./views/ArticleView";
import ArticlesOverview from "./views/ArticlesOverview";
import LoadingView from "./views/LoadingView";
import FooterContent from "./FooterContent";
import ProjectOverview from "./views/ProjectsOverview";
import ResumeOverview from "./views/ResumeView";

const schema = Layout();
const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const InsetFooter = getInsetFooter(styled)

schema.configureHeader(builder => {
    builder
        .create("whatever_id")
        .registerConfig("xs", {
            position: "sticky"
        })
        .registerConfig("md", {
            position: "relative" // won't stick to top when scroll down
        });
});

schema.configureEdgeSidebar(builder => {
    builder
        .create("unique_id", { anchor: "left" })
        .registerPermanentConfig("xs", {
            width: 260, // px, (%, rem, em is compatible)
            collapsible: false,
            // collapsedWidth: 64
        });
});

schema.configureInsetSidebar((builder) => {
    builder
        .create("secondarySidebar", { anchor: "right" })
        .registerFixedConfig("md", {
            width: 60,
        });
});

const App = () => {

    return (
        <Root theme={theme} scheme={schema}>
            {({ state: { sidebar } }) => (
                <>
                    <CssBaseline />
                    <Header color={'#fff'}>
                        <Toolbar>
                            <SidebarTrigger sidebarId="unique_id" />
                            <HeaderContent />
                        </Toolbar>
                    </Header>
                    <DrawerSidebar sidebarId="unique_id">
                        <SidebarContent>
                            <SideNavHeaderContent collapsed={sidebar.unique_id.collapsed} />
                            <SideNavContent />
                        </SidebarContent>
                        <CollapseBtn />
                    </DrawerSidebar>
                    <Content>
                        <Router>
                            <React.Suspense fallback={<LoadingView/>}>
                                <Switch>
                                    <Route exact path={'/reading-list'}>
                                        <ReadingListOverview/>
                                    </Route>
                                    <Route exact path={'/article/*'}>
                                        <ArticleView/>
                                    </Route>
                                    <Route exact path={'/articles'}>
                                        <ArticlesOverview/>
                                    </Route>
                                    <Route exact path={'/projects'}>
                                        <ProjectOverview/>
                                    </Route>
                                    <Route exact path={'/resume'}>
                                        <ResumeOverview/>
                                    </Route>
                                    <Redirect from="/" to="/articles" />
                                </Switch>
                            </React.Suspense>
                        </Router>
                    </Content>
                    <InsetFooter>
                        <FooterContent />
                    </InsetFooter>
                </>
            )}
        </Root>
    );
};

export default App;