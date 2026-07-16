import React from 'react';
const WorkTracker = () => {

  const [entries, setEntries] = React.useState([]);
  const [form, setForm] = React.useState({
    title: '',
    description: '',
    category: '',
    hours: 0,
    date: new Date().toISOString().split('T')[0],
    status: 'pending'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    
    const newEntry = {
      ...form,
      id: Date.now(),
      date: new Date(form.date).toISOString()
    };
    
    setEntries([newEntry, ...entries]);
    setForm({
      title: '',
      description: '',
      category: '',
      hours: 0,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    });
  };


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Work Tracker</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Enter task title"
          value={form.title}
          onChange={(e) => setForm({...form, title: e.target.value})}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Hours spent"
          value={form.hours}
          onChange={(e) => setForm({...form, hours: parseFloat(e.target.value) || 0})}
          className="border p-2 w-full mb-2"
          min="0"
          step="0.5"
        />
        <select
          value={form.status}
          onChange={(e) => setForm({...form, status: e.target.value})}
          className="border p-2 w-full mb-2"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add Entry
        </button>
      </form>
      <div>
        <h3 className="text-xl mb-2">Entries:</h3>
        <ul>
          {entries.map((entry, index) => (
            <li key={entry.id} className="p-3 mb-2 border rounded">
              <div className="flex justify-between">
                <div>
                  <strong>{entry.title}</strong>
                  <p className="text-sm text-gray-600">{entry.description}</p>
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-2">
                    {entry.category}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block mb-1">{entry.hours}h</span>
                  <span className="px-2 py-1 rounded text-sm">
                    {entry.status === 'completed' ? (
                      <span className="bg-green-100 text-green-800">Completed</span>
                    ) : (
                      <span className="bg-blue-100 text-blue-800">In Progress</span>
                    )}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkTracker;

