let cache = {
  data: null,
  timestamp: null,
};

const CACHE_DURATION = 60 * 1000; // 60 sec
exports.getAllTasks = async (req, res) => {
  try {
    const now = Date.now();

    if (cache.data && now - cache.timestamp < CACHE_DURATION) {
      return res.json({
        source: "cache",
        data: cache.data,
      });
    }

    const tasks = await Task.find();

    cache = {
      data: tasks,
      timestamp: now,
    };

    res.json({
      source: "database",
      data: tasks,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
function clearCache() {
  cache = { data: null, timestamp: null };
}
exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  clearCache(); // ✅ invalidate
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  clearCache();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  clearCache();
  res.json({ message: "Deleted" });
};