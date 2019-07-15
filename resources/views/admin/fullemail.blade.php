@extends('admin.app')
@section('content')
    <div class="container" style="padding: 10%;">
        <div class="row">
            <table class="col-md-6">
                <tbody>
                <tr><td><strong>Email : </strong>{{ $email->email }}</td></tr>
                <tr><td><strong>Numero de telephone : </strong>{{ $email->phone }}</td></tr>
                <tr><td><strong>Date : </strong>{{ $email->created_at }}</td></tr>
                <tr><td><strong>Sujet : </strong>{{ $email->subject }}</td></tr>
                </tbody>
            </table>
            <div class="col-md-6">
                <ul>
                    <li><a href="/admin/deletemail/{{ $id }}" style="color: red;">supprimer <i class="fa fa-trash"></i> </a></li>
                    <li><a href="/admin/reply/{{ $id }}">repondre <i class="fa fa-reply"></i></a></li>
                </ul>
            </div>
            <div class="col-md-12">
                <p style="text-align: center;margin: 20px;">
                    {!! $email->message !!}
                </p>
            </div>
        </div>
    </div>
@endsection