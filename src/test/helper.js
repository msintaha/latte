import { expect, use } from 'chai';
import { configure } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

use(sinonChai);
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
