// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(feat|fix|breaking|chore|refactor|tests|perf|styles|ci)\(((?:CC)(?:-[0-9]{1,}|))\):\s([a-zA-Z0-9 .]{1,50})/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  }
};
