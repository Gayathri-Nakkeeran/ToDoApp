import DataProvider from "./components/DataProvider";

//Link for icons
//Provider for redux Store -- ? But Not wroking as of now

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </head>
      <body>
        <DataProvider>{children}</DataProvider>

      </body>
    </html>
  )
}
