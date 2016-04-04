<template>
  第 {{$parent.nextWeek}} 周第 {{$parent.nextTrainNo}} 次训练:<s-train :train="$parent.train"></s-train><br>
  当前进度:第 1 次,跑步 00:26<br>
  <button>暂停</button>
  <button>停止训练</button>
  <a v-link="'/running/end'">若完成</a>
</template>
