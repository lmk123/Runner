<template>
  你将进行第 {{$parent.nextWeek}} 周的第{{$parent.nextTrainNo}}次训练.<br>
  训练之前,请做 5~10 分钟的热身运动,之后点击下面的按钮开始跑步.<br>
  todo 至少五分钟后才能点击 start 按钮
  <a v-link="'/running/timer'">Start</a>
</template>
