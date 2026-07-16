import { v4 as uuidv4 } from 'uuid';

// In-memory storage for demo purposes
// In production, use a proper database like PostgreSQL, MongoDB, etc.
let works = [
  {
    id: '1',
    title: 'Portfolio Website Redesign',
    description: 'Redesigned personal portfolio website with modern UI/UX practices',
    category: 'Development',
    hoursSpent: 15,
    date: '2024-01-15',
    status: 'Completed',
    tags: ['React', 'TailwindCSS', 'UI/UX']
  },
  {
    id: '2',
    title: 'Client Meeting - Project Requirements',
    description: 'Initial consultation with client to gather project requirements',
    category: 'Meeting',
    hoursSpent: 2,
    date: '2024-01-14',
    status: 'Completed',
    tags: ['Communication', 'Planning']
  }
];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Get all works, optionally filtered by category or status
      let filteredWorks = [...works];
      
      if (req.query.category) {
        filteredWorks = filteredWorks.filter(w => w.category === req.query.category);
      }
      
      if (req.query.status) {
        filteredWorks = filteredWorks.filter(w => w.status === req.query.status);
      }
      
      res.status(200).json({ success: true, data: filteredWorks });
      break;
      
    case 'POST':
      // Create new work entry
      const { title, description, category, hoursSpent, date, status, tags } = req.body;
      
      if (!title || !description || !category) {
        return res.status(400).json({ 
          success: false, 
          error: 'Title, description, and category are required' 
        });
      }
      
      const newWork = {
        id: uuidv4(),
        title,
        description,
        category,
        hoursSpent: hoursSpent || 0,
        date: date || new Date().toISOString().split('T')[0],
        status: status || 'In Progress',
        tags: tags || [],
        createdAt: new Date().toISOString()
      };
      
      works.push(newWork);
      res.status(201).json({ success: true, data: newWork });
      break;
      
    case 'PUT':
      // Update existing work
      const { id } = req.query;
      const { title, description, category, hoursSpent, date, status, tags } = req.body;
      
      const index = works.findIndex(w => w.id === id);
      if (index === -1) {
        return res.status(404).json({ success: false, error: 'Work not found' });
      }
      
      works[index] = {
        ...works[index],
        ...(title !== undefined && { title }),
        ...(description !== undefined && { description }),
        ...(category !== undefined && { category }),
        ...(hoursSpent !== undefined && { hoursSpent }),
        ...(date !== undefined && { date }),
        ...(status !== undefined && { status }),
        ...(tags !== undefined && { tags }),
        updatedAt: new Date().toISOString()
      };
      
      res.status(200).json({ success: true, data: works[index] });
      break;
      
    case 'DELETE':
      // Delete work entry
      const { id: deleteId } = req.query;
      const initialLength = works.length;
      works = works.filter(w => w.id !== deleteId);
      
      if (work.length === initialLength) {
        return res.status(404).json({ success: false, error: 'Work not found' });
      }
      
      res.status(200).json({ success: true, message: 'Work deleted successfully' });
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
