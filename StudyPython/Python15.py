#!/usr/bin/python
# -*- coding: UTF-8 -*-
# __author__ = 'wangqianyi1'

score = int(raw_input('输入分数:\n'))
if score >= 90:
    grade = 'A'
elif score >= 60:
    grade = 'B'
else:
    grade = 'C'

print '%d 属于 %s' % (score,grade)
