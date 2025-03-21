import { createBrowserRouter } from "react-router-dom";

const route = createBrowserRouter([{
    path: "/" ,element: <RootLayout/>,children: [
        {index: true, element: <Home/>},
        {path: "items", element: <ItemsLayout/> , children: [
            {index: true, element: <ListItems/>},
            {path: "new", element: <CreateItem/>},
            {path: ":id", element: <ShowItem/>},
            {path: ":id/update", element: <UpdateItem/>}, 
        ]}
    ]
}])
            
