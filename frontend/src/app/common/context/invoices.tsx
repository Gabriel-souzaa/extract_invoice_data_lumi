import { createContext, useContext, useState, useEffect } from 'react';
import { IInvoiceData } from '../interface/invoices.interface'

interface IInvoiceContext {
  invoicesData: IInvoiceData[];
  loading: boolean;
}

const InvoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);

export function InvoiceContextProvider({ children }: { children: React.ReactNode }) {
  const [invoicesData, setInvoicesData] = useState<IInvoiceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Setando os dados");
    setInvoicesData(
      [
        {
          id: 1,
          number_client: "7202788969",
          month_reference: "FEV/2023",
          expiration_date: "08/03/2023",
          total_value: "R$161,30",
        },
        {
          id: 2,
          number_client: "7202788969",
          month_reference: "FEV/2023",
          expiration_date: "08/03/2023",
          total_value: "R$161,30",
        },
        {
          id: 3,
          number_client: "7202788969",
          month_reference: "FEV/2023",
          expiration_date: "08/03/2023",
          total_value: "R$161,30",
        },
        {
          id: 4,
          number_client: "7202788969",
          month_reference: "FEV/2023",
          expiration_date: "08/03/2023",
          total_value: "R$161,30",
        }
      ]
    );

    setLoading(false);
  }, []);

  const filterInvoices = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  }

  return (
    <InvoiceContext.Provider value={{ invoicesData, loading }}>
      {children}
    </InvoiceContext.Provider>
  );
}
export function useInvoices() {
  return useContext(InvoiceContext);
}
