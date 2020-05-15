import React from "react";
import styled from "styled-components";
import Layout, {
    Root,
    getHeader,
    getDrawerSidebar,
    getSidebarTrigger,
    getSidebarContent,
    getCollapseBtn,
    getContent,
    getInsetContainer,
    getInsetSidebar,
    getInsetFooter,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    HeaderMockUp,
    NavHeaderMockUp,
    NavContentMockUp,
    ContentMockUp,
    FooterMockUp,
} from "@mui-treasury/mockup/layout";
import HeaderContent from "./HeaderContent";






// scheme.configureHeader((builder) => {
//     builder
//         .create("whatever_id")
//         .registerConfig("xs", {
//             position: "sticky"
//         })
//         .registerConfig("md", {
//             position: "sticky" // won't stick to top when scroll down
//         });
// });
//
// scheme.configureEdgeSidebar((builder) => {
//     builder
//         .create("primarySidebar", { anchor: "left" })
//         .registerPermanentConfig("xs", {
//             collapsible: false,
//             width: "width", // 'auto' is only valid for temporary variant
//             collapsedWidth: 64,
//         });
// });
//


const scheme = Layout();

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const InsetContainer = getInsetContainer(styled)
const InsetSidebar = getInsetSidebar(styled)
const InsetFooter = getInsetFooter(styled)

scheme.configureHeader(builder => {
    builder
        .create("whatever_id")
        .registerConfig("xs", {
            position: "sticky"
        })
        .registerConfig("md", {
            position: "sticky" // won't stick to top when scroll down
        });
});

scheme.configureEdgeSidebar(builder => {
    builder
        .create("unique_id", { anchor: "left" })
        .registerPermanentConfig("xs", {
            width: 250, // px, (%, rem, em is compatible)
            collapsible: false,
            // collapsedWidth: 64
        });
});

scheme.configureInsetSidebar((builder) => {
    builder
        .create("secondarySidebar", { anchor: "right" })
        .registerFixedConfig("md", {
            width: 256,
        });
});

const App = () => {

    return (
        <Root scheme={scheme}>
            {({ state: { sidebar } }) => (
                <>
                    <CssBaseline />
                    <Header>
                        <Toolbar>
                            <SidebarTrigger sidebarId="unique_id" />
                            <HeaderContent />
                        </Toolbar>
                    </Header>
                    <DrawerSidebar sidebarId="unique_id">
                        <SidebarContent>
                            <NavHeaderMockUp collapsed={sidebar.unique_id.collapsed} />
                            <NavContentMockUp />
                        </SidebarContent>
                        <CollapseBtn />
                    </DrawerSidebar>
                    <Content>
                        <InsetContainer rightSidebar={
                            <InsetSidebar sidebarId="secondarySidebar">
                                <NavContentMockUp />
                            </InsetSidebar>
                        }>
                        {/*    rightSidebar={*/}
                        {/*        <InsetSidebar sidebarId="secondarySidebar">*/}
                        {/*            <NavContentMockUp />*/}
                        {/*        </InsetSidebar>*/}
                        {/*    }*/}
                        {/*>*/}
                            <ContentMockUp />
                        </InsetContainer>
                    </Content>
                    <InsetFooter>
                        <FooterMockUp />
                    </InsetFooter>
                </>
            )}
        </Root>
    );
};

export default App;