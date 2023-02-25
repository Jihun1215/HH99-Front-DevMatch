import { QueryClient, QueryClientProvider } from 'react-query';
import Router from '../src/Shared/Router';
import GlobalStyle from './Style/GlobalStyle';

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </>
    );
}

export default App;
