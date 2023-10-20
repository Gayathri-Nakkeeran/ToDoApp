import DataProvider from "./components/DataProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <body>
        <DataProvider>{children}</DataProvider>

      </body>
    </html>
  )
}
