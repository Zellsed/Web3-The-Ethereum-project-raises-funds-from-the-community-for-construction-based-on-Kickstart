import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '10px'}}>
            <Link route="/">
                <span className="item">Crowd Coin</span>
            </Link>

            <Menu.Menu position="right">
                <Link route="/">
                    <span className="item">Campaigns</span>
                </Link>

                <Link route="/campaigns/new">
                    <span className="item">+</span>
                </Link> 
            </Menu.Menu>
        </Menu>
    );
}