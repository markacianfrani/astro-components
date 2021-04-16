// let storybookPath = 'http://localhost:8085/iframe.html?id=';
const storybookPath = 'http://docker.for.mac.host.internal/iframe.html?id=';


module.exports = {
  'asyncCaptureLimit': 5,
  'asyncCompareLimit': 50,
  'debug': false,
  'debugWindow': false,
  'engine': 'puppeteer',
  'engineFlags': [],
  'id': 'backstop demo',
  'onBeforeScript': 'puppet/onBefore.js',
  'onReadyScript': 'puppet/onReady.js',
  'paths': {
    'bitmaps_reference': 'backstop_data/bitmaps_reference',
    'bitmaps_test': 'backstop_data/bitmaps_test',
    'ci_report': 'backstop_data/ci_report',
    'engine_scripts': 'backstop_data/engine_scripts',
    'html_report': 'backstop_data/html_report',
  },
  'report': [
    'browser',
  ],
  'scenarios': [
    {
      'label': 'Accordion',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-accordion--accordion`,
    },
    {
      'label': 'Button - Standard',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-buttons--standard-button`,
    },
    {
      'label': 'Button - Slotted Icon',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-buttons--slotted-icon-button`,
    },
    {
      'label': 'Button - Grouped',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-buttons--grouped-buttons`,
    },
    {
      'label': 'Button - All Button Variants',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-buttons--all-button-variants`,
    },
    {
      'label': 'Classification Markings',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-classification-markings--classification-markings`,
    },
    {
      'label': 'Classification Marking Banners',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-classification-markings--classification-marking-banners`,
    },
    {
      'label': 'Classification Marking Tags',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-classification-markings--classification-marking-tags`,
    },
    {
      'label': 'Clock',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-clock--clock`,
    },
    {
      'label': 'Clock',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-clock--clock`,
      'hideSelectors': [
        '.rux-clock__segment__value',
      ],
    },
    {
      'label': 'Clock with AOS/LOS',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-clock--clock-with-aos-los`,
    },
    {
      'label': 'Form Elements - Checkboxes',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-form-elements--checkboxes`,
    },
    {
      'label': 'Form Elements - Radio Buttons',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-form-elements--radio-buttons`,
    },
    {
      'label': 'Form Elements - Input Fields',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-form-elements--input-fields`,
    },
    {
      'label': 'Form Elements - Select Menu',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-form-elements--select-menu`,
    },
    {
      'label': 'Global Status Bar',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-global-status-bar--global-status-bar`,
    },
    {
      'label': 'Global Status Bar with Slot Content',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-global-status-bar--global-status-bar-with-slot-content`,
    },
    {
      'label': 'Global Status Bar with Tabs',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-global-status-bar--global-status-bar-with-tabs`,
    },
    {
      'label': 'Icons & Symbols - All Icons',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-icons-symbols--all-icons`,
    },
    {
      'label': 'Icons & Symbols - Monitoring Icons',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-icons-symbols--monitoring-icons`,
    },
    {
      'label': 'Icons & Symbols - Progress Icon',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-icons-symbols--progress-icon`,
    },
    {
      'label': 'Icons & Symbols - Monitoring Icon Set',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-icons-symbols--monitoring-icon-set`,
    },
    {
      'label': 'Log',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-log--log`,
    },
    {
      'label': 'Dialog Box',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-dialog-box--dialog-box`,
    },
    {
      'label': 'Notification',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-notification--notification`,
    },
    {
      'label': 'Notification - Notification Auto Close',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-notification--notification-auto-close`,
    },
    {
      'label': 'Notification - All Notification Banners',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-notification--all-notification-banners`,
    },
    {
      'label': 'Pop Up Menu',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-pop-up-menu--pop-up-menu`,
      'clickSelectors': 'button[aria-controls=\'popup-menu-1\']',
    },
    {
      'label': 'Progress - Determinate Progress',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-progress--determinate-progress`,
    },
    {
      'label': 'Progress - Determinate Progress Max',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-progress--determinate-progress-max`,
    },
    {
      'label': 'Push Button',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-push-button--push-button`,
    },
    {
      'label': 'Push Button - All Push Button Variants',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-push-button--all-push-button-variants`,
    },
    {
      'label': 'Segmented Button',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-segmented-button--segmented-button`,
    },
    {
      'label': 'Slider',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-slider--slider`,
    },
    {
      'label': 'Slider - All Slider Variants',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-slider--all-slider-variants`,
    },
    {
      'label': 'Status',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-status--status`,
    },
    {
      'label': 'Table',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-table--html-table`,
    },
    {
      'label': 'Table - HTML Controls',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-table--html-controls-table`,
    },
    {
      'label': 'Table - AG Grid',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-table--ag-grid`,
    },
    {
      'label': 'Tabs',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-tabs--tabs`,
    },
    {
      'label': 'Tabs - Small',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-tabs--tabs-compact`,
    },
    {
      'label': 'Timeline',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-timeline--timeline`,
    },
    {
      'label': 'Toggle',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-toggle--toggle`,
    },
    {
      'label': 'Tree',
      'misMatchThreshold': 1E-10,
      'url': `${storybookPath}components-tree--tree`,
    },

  ],
  'viewports': [
    {
      'height': 768,
      'label': 'PC',
      'width': 1024,
    },
  ],
};
