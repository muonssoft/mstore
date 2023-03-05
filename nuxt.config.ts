// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/supabase'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head:{
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                    {
                        rel:"stylesheet",
                        href:"https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
                    },
                    {
                        rel: "icon",
                        href: "assets/icon.svg",
                        type:"image/svg"
                    },
                    {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: "anonymous"
                    },
                    {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                        rel: "stylesheet"
                    }
                ],
                style: [
                    // <style type="text/css">:root { color: red }</style>
                    { children: '* { margin: 0; padding: 0; box-sizing: border-box;font-family: "Poppins", sans-serif;}'}
                  ],
            }
        }
})
