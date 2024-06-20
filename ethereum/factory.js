import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract (
    JSON.parse(CampaignFactory.interface),
    // '0xF7417Cd20b1501a2a707B975267771A0201C4a2A'
);

export default instance;