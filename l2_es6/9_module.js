

// ES6 comes with modules

// ./MyCode.js
import AwesomeLibrary from 'AwesomeLibrary';
import { Helper as AwesomeHelper } from 'AwesomeLibrary';

AwesomeLibrary.do_something()
AwesomeHelper.something_else();

// AwesomeLibrary.js
class AwesomeLibraryClass () {};// ...
const SmallThingy = {};// ...

export default AwesomeLibraryClass;
export { SmallThingy as Helper };
