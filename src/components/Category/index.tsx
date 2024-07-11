import Image from 'next/image'
import React from 'react'
import { TableBodyCell } from '../Common/TableComponent'

interface AllCategoryProps {
    categories: any[]
}
const AllCategory: React.FC<AllCategoryProps> = async ({ categories }) => {

    const formatDateTimeISO = (dateTimeString: string | number | Date) => {
        return new Date(dateTimeString).toISOString();
    };

    return (
        <tbody className="divide-y divide-gray-200">
            {categories?.length > 0 ? (
                categories.map((category: any) => (
                    <tr key={category._id}>
                        <TableBodyCell>{category.title}</TableBodyCell>
                        <TableBodyCell>
                            <Image
                                src={category.imageUrl}
                                alt={category.title}
                                className="h-10 w-10 rounded-full"
                                height={40}
                                width={40}
                            />
                        </TableBodyCell>
                        <TableBodyCell>{formatDateTimeISO(category.createdAt)}</TableBodyCell>
                        <TableBodyCell>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                Edit
                            </button>
                        </TableBodyCell>
                        <TableBodyCell>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
                                Delete
                            </button>
                        </TableBodyCell>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-lg font-medium">
                        No categories available.
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default AllCategory