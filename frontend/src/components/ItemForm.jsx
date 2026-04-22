import { useState } from 'react';
import { createItem } from '../api';
export default function ItemForm({ onItemAdded }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');   // ← NEW
    const [quentity, setQuentity] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem({
            name, description, price: Number(price), quentity: Number(quentity),
        });  // ← UPDATED
        setName('');
        setDescription('');
        setPrice('');  // ← NEW
        setQuentity('');
        onItemAdded();
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <h2>Add New Item</h2>
            <div>
                <input
                    placeholder="Item name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Price (e.g. 29.99)"
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Quentity (e.g. 45)"
                    type="number"
                    value={quentity}
                    onChange={e => setQuentity(e.target.value)}
                    required
                />
            </div>
            {/* ← NEW */}
            <button type="submit">Add Item</button>
        </form >
    );
}