#!/usr/bin/python
# -*- coding: UTF-8 -*-
# __author__ = 'wangqianyi1'

#打印水仙花数

for n in range(100,1000):
	i = n/100
	j = n/10%10
	k = n%10
	if n == i**3 + j**3 +k**3:
		print n

#第二种方法
for x in range(1,10):
	for y in range(0,10):
		for z in range(0,10):
			s1 = x*100+y*10+z
			s2 = pow(x,3)+pow(y,3)+pow(z,3)
			if s1 ==s2:
				print "水仙花数有：%ld"%(s2)