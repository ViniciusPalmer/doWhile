import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createAt: string;
}

export function TransactionTable() {
    const [transaction, setTransaction] = useState<Transaction[]>([]);

    useEffect(()=> {
       api.get('transactions')
        .then(response => setTransaction(response.data.transactions))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                   {transaction.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            {
                                new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)
                            }
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                            {
                                new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createAt)
                                )
                            }
                        </td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </Container>
    );
}