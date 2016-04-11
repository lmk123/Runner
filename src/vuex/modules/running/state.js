let state = {
  train: null, // 当前正在进行的训练
  trains: null, // 训练内容可能可以多选,此时所有的训练内容就包含在这个数组里
  week: null, // 当前正在训练第几周
  no: null, // 当前正在训练第几课
  title: '' // 当前训练的步骤名称:"跑前热身","跑步中","跑后热身"
};

export default state;
