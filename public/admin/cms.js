// public/admin/cms.js

import CMS from 'decap-cms-app'; // Import the Decap CMS library
import MyTemplate from '../../src/components/MyTemplate'; // Import the MyTemplate component

// Register the preview template
CMS.registerPreviewTemplate('my-template', MyTemplate);