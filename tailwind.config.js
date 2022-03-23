module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width:
                {
                    '300': '268px',
                },
            colors:
                {
                    ccBGBlue: '#38BDF8',
                    ccblack: '#000000',
                    ccBlue: '#269aff',
                    ccOrange: '#e3bf7d',
                    ccSocialIcon: '#ffffff',
                    ccPanelWhite: '#ffffff',
                    ccDarkBlue: '#005192',
                    ccLightTeal: '#98D6E3'
                },
            fontSize:
                {
                    xs: '0.5625rem',
                    sm: '0.625rem',
                    base: '0.75rem',
                    lg: '0.875rem',
                    xl: '1.125rem',
                    '2xl': '1.5rem',
                    '4xl': '4rem'
                },
            fontFamily: {
                'press-start': ['"Press Start 2P"', 'cursive'],
                'VT323': ["VT323", 'cursive'],
                'Branda-yolq': ["Branda-yolq", "cursive"]
            },
            boxShadow:
                {
                    cc_Header_Btn_DropShadow: '5px 5px 0px 0px rgba(0,0,0,0.1)',
                    cc_panel_dropShadow: '25px 25px 0px 0px rgba(0,0,0,0.2)'
                },
            borderRadius: {none: '0', xs: '0.5rem'}
        }
    },
    // plugins: [],
};
