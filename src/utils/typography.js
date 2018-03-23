import Typography from 'typography';
import theme from 'typography-theme-us-web-design-standards';
// Html, body should be height 100%
theme.overrideThemeStyles = () => ({
    'html, body': {
        height: '100%'
    }
});

export default new Typography(theme);