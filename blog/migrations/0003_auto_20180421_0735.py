# Generated by Django 2.0 on 2018-04-21 07:35

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20180411_1546'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='content',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
