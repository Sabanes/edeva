import CMS from 'decap-cms-app';
import MyTemplate from '../../src/components/MyTemplate';

// Register custom template
CMS.registerPreviewTemplate('my-template', MyTemplate);