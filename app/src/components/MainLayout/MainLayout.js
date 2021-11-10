import Header from "../Header";


const Layout = ({children}) => (
        <div>
                { <Header/> }
                <div>{children}</div>
        </div>
)

export default Layout