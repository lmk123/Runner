/**
 * 一共 13 周的训练计划,每周有三次训练,每次训练可能会有两种选项
 */
export default {
  name: '13周跑步训练计划',
  plans: [
    [
      [
        {
          name: '常规选项',
          steps: [
            {
              name: '慢跑',
              time: 1
            },
            {
              name: '走路',
              time: 2
            }
          ],
          repeat: 8
        },
        {
          name: '轻松选项',
          steps: [
            {
              name: '飞翔',
              time: 1
            },
            {
              name: '冲刺',
              time: 2
            }
          ],
          repeat: 8
        }
      ]
    ]
  ]
};
