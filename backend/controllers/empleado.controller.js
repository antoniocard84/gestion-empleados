const Empleado = require('../models/empleado');
const empleadoCtrl = {};

// Obtener lista de empleados
empleadoCtrl.getEmpleados = async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
};

// Crear empleado
empleadoCtrl.createEmpleados = async (req, res) => {
  const empleado = new Empleado(req.body);
  await empleado.save();
  res.json({ status: 'Empleado guardado' });
};

// Obtener un solo empleado por ID
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
  const empleadoUnico = await Empleado.findById(req.params.id);
  res.json(empleadoUnico);
};

// Actualizar empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
  const { id } = req.params;
  const empleadoEdit = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };
  await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
  res.json({ status: 'Empleado Actualizado' });
};

// Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({ status: 'Empleado Eliminado' });
};

module.exports = empleadoCtrl;