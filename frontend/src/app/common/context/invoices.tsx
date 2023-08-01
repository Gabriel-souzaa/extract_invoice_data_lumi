import { createContext, useContext, useState, useEffect } from 'react';
import { IInvoice, InvoiceHistory } from '../interface/invoices.interface'

interface IInvoiceContext {
  clientsData: IInvoice[];
  reportData: IInvoice[];
  loading: boolean;
  getClients: () => {};
  getReport: (text: string, month: string) => {};
}

const InvoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);

export function InvoiceContextProvider({ children }: { children: React.ReactNode }) {
  const [clientsData, setclientsData] = useState<IInvoice[]>([]);
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    (async () => {
      const res = await getClients();
      await getReport('', '');
      setclientsData(res);
    })();

    setLoading(false);
  }, []);

  const getClients = async () => {
    const response = await fetch('http://localhost:3001/api/invoice');
    if (response.ok) {
      return response.json();
    }
  }

  const getReport = async (text: string, month: string) => {
    const response = await fetch(`http://localhost:3001/api/invoice/filter?number_client=${text}&month=${month}`)
    if (response.ok) {
      const data = await response.json();
      setReportData(data)
      return;
    }
  }


  return (
    <InvoiceContext.Provider value={{ clientsData, loading, getClients, reportData, getReport }}>
      {children}
    </InvoiceContext.Provider>
  );
}
export function useInvoices() {
  return useContext(InvoiceContext);
}
