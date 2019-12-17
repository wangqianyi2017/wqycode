#!/usr/bin/python
# -*- coding: UTF-8 -*-
# __author__ = 'wangqianyi1'

'''
输出指定格式的日期
'''

import datetime

if __name__ == '__main__':

	#输出今日日期，格式为dd/mm/yyyy。更多选项可以查看strftime()方法
	print(datetime.date.today().strftime('%d/%m/%Y'))

	#创建日期对象
	miyazakiBirthDate = datetime.date(1941,1,5)

	print(miyazakiBirthDate.strftime('%d/%m/%Y'))

	#日期算术运算
	miyazakiBirthNextDate = miyazakiBirthDate+datetime.timedelta(days=1)

	print(miyazakiBirthNextDate.strftime('%d/%m/%Y'))

	#日期替换
	miyazakiFirstBirthDate = miyazakiBirthDate.replace(year=miyazakiBirthDate.year+1)

	print(miyazakiFirstBirthDate.strftime('%d/%m/%Y'))