import Router from '../src/Shared/Router';
import GlobalStyle from './Style/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <GlobalStyle />
            {/* QueryClientProvider : 데이터를 읽어오는 기능(QueryClient)을 애플리케이션 전체에 주입하도록 하는 API */}
            <QueryClientProvider client={queryClient}>
                <Router />
            </QueryClientProvider>
        </>
    );
}

export default App;
