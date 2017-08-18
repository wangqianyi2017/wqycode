#!/usr/bin/python
# -*- coding: UTF-8 -*-
# __author__ = 'wangqianyi1'

#问题：有一对兔子，从出生后第3个月起每个月都生一对兔子，
# 小兔子长到第三个月后每个月又生一对兔子，
# 假如兔子都不死，问每个月的兔子总数为多少？

f1 = 1
f2 = 1
for i in range(1,22):
    print '%12ld %12ld' % (f1,f2),
    if (i % 3) == 0:
        print ''
    f1 = f1 + f2
    f2 = f1 + f2



#递归做，非常慢。计算n=36就要大概七八秒吧
def fib(n):
	if n==1 or n==2:
		return 1
	else:
		return fib(n-1)+fib(n-2)
print fib(36)


# time 为第几个月，n 为 3
def rabbit(time,n):
	if time<1:
		return 0
	elif time==1:
		num=1
	elif time<n:
		num=1
	else:
		num=rabbit(time-1,n)+rabbit(time-(n-1),n)
	return num
print rabbit(25,3)