import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { InProduct, Product, ProductOrder } from '../../Interfaces/Product';
import connection from './connection';

async function create(product: InProduct): Promise<Product> {
  const { name, amount } = product as InProduct;
  const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
  const [result] = await connection.execute(query, [name, amount]) as ResultSetHeader[];
  
  return { 
    id: result.insertId,
    name,
    amount,
  } as Product;
}

async function getAll(): Promise<ProductOrder[]> {
  const query = 'SELECT * FROM Trybesmith.Products';

  const [result] = await connection.execute<RowDataPacket[]>(query);

  return result as ProductOrder[];
}

export default {
  create,
  getAll,
};