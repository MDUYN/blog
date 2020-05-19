import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const SideNavHeaderContent = ({ collapsed }) => (
    <>
        <div style={{ padding: collapsed ? 8 : 16, transition: '0.3s' }}>
            <Avatar
                style={{
                    width: collapsed ? 48 : 130,
                    height: collapsed ? 48 : 130,
                    transition: '0.3s',
                }}
                src={require("./resources/me.png")}
            />
            <div style={{ paddingBottom: 16 }} />
            <Typography variant={'h6'} noWrap>
                Marc van Duyn
            </Typography>
            <Typography variant={"body2"} color={'textSecondary'} noWrap gutterBottom>
                MSc Software Engineering student
            </Typography>
            <Typography variant={"body2"} color={'textSecondary'} noWrap gutterBottom>
                @ University of Amsterdam
            </Typography>
        </div>
        <Divider />
    </>
);

SideNavHeaderContent.propTypes = {
    collapsed: PropTypes.bool.isRequired,
};
SideNavHeaderContent.defaultProps = {};

export default SideNavHeaderContent;