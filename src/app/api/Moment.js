const MomentClient = require("moment");

/**
 * Set locale moment zone
 */
require(`moment/locale/${
  process.env.REACT_APP_LOCAL_ZONE ? process.env.REACT_APP_LOCAL_ZONE : "id"
}`);

export default MomentClient;
