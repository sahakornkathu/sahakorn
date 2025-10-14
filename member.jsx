import { useEffect, useState } from "react";

const API_URL = "https://ttottijljxoinptmhgtu.supabase.co/functions/v1/members";

export default function App() {
  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    status: "Active"
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setMembers(data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const body = editId ? { id: editId, ...form } : form;
    await fetch(API_URL, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    setForm({ first_name: "", last_name: "", phone: "", status: "Active" });
    setEditId(null);
    fetchMembers();
  };

  const handleEdit = (member) => {
    setForm(member);
    setEditId(member.id);
  };

  const handleDelete = async (id) => {
    await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    fetchMembers();
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ระบบสมาชิก</h1>

      <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-2 gap-4">
        <input name="first_name" placeholder="ชื่อ" value={form.first_name} onChange={handleChange} className="border p-2 rounded" required />
        <input name="last_name" placeholder="นามสกุล" value={form.last_name} onChange={handleChange} className="border p-2 rounded" required />
        <input name="phone" placeholder="เบอร์โทรศัพท์" value={form.phone} onChange={handleChange} className="border p-2 rounded" required />
        <select name="status" value={form.status} onChange={handleChange} className="border p-2 rounded">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded col-span-2">{editId ? "แก้ไขสมาชิก" : "เพิ่มสมาชิก"}</button>
      </form>

      <ul>
        {members.map(m => (
          <li key={m.id} className="flex justify-between border-b py-2">
            <span>{m.first_name} {m.last_name} - {m.phone} - {m.status}</span>
            <div>
              <button onClick={() => handleEdit(m)} className="bg-yellow-400 text-white px-2 rounded mr-2">แก้ไข</button>
              <button onClick={() => handleDelete(m.id)} className="bg-red-500 text-white px-2 rounded">ลบ</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
