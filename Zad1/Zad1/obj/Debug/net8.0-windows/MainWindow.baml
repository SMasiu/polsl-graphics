   M S B A M L   `   `   `  ����  Zad1     WpfApplication1.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  
MainWindow��5   	   $	��400��6   $	��600��6)   .��5      �  � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   .+�5
   
   ��  �� Orientation$ 
Horizontal=�6   $��5q�6.   .+�5      �� -   5         ��Name$ colorComboBox��5      $	��100��6.    �� SelectedIndex$ 0��6:   .@�5      �� $��Black��6   
 � Tag$ Black��6/   �� 5      $	��Red��6   $	 Red��6-   �� 5      $��Green��6   $ Green��6/   �� 5      $
��Blue��6   $
 Blue��6.   5      �� 5      -   5         ��Name$ thicknessSlider��5      $	��100��6.    � Minimum$ 1Q�6:    � Maximum$ 10Q�6F   	 � Value$	 1Q�6S   
 �� TickFrequency$
 1Q�6]    �� TickPlacement$ BottomRight=�6o   5      �� 5   
   -   5        $��paintSurface��5      $��1��6%   
�������5   0   5      5      