@extends('admin.app')
@section('content')
    <div class="inbox-head">
        <h3>Ajouter un produit</h3>
    </div>
    <div class="container pt-5">
        @include('flash-messages')
    {!! Form::open(['url'=>'admin/product/add','enctype'=>'multipart/form-data']) !!}
        <div class="form-group">
            {!! Form::label('name','Nom :') !!}
            {!! Form::text('name',null,['class'=>'form-control','placeholder'=>'entrez le nom ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('new_price','Nouveau prix :') !!}
            {!! Form::number('new_price',null,['class'=>'form-control','placeholder'=>'entrez le nouveau prix ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('old_price','Ancien prix :') !!}
            {!! Form::number('old_price',null,['class'=>'form-control','placeholder'=>'entrez l\'ancien prix ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('stock','Qté au stock :') !!}
            {!! Form::number('stock',null,['class'=>'form-control','placeholder'=>'entrez la qté au stock ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('rating','Nombre des étoils :') !!}
            {!! Form::number('rating',null,['class'=>'form-control','placeholder'=>'entrez le nombre des étoils ...','required'=>'required','autocomplete'=>'off']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('new','Nouveau :') !!}
            {!! Form::checkbox('new',null,true) !!}
        </div>
        <div class="form-group">
            {!! Form::label('category','Categorie :') !!}
            {!! Form::select('category',['vetement'=>'vetement','electronique'=>'electronique','maison_et_cuisine'=>'maison et cuisine','beauté'=>'beauté','fitness'=>'fitness'],null,['class'=>'form-control','required'=>'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('description','Description :') !!}
            {!! Form::textarea('description',null,['id'=>'article-ckeditor','class'=>'form-control','placeholder'=>'entrez la description ...','required'=>'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('image','Image :') !!}
            {!! Form::file('image',['class'=>'form-control','required'=>'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::submit('Ajouter',['class'=>'btn btn-outline-info form-control']) !!}
        </div>
    {!! Form::close() !!}
    </div>
    <script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'article-ckeditor' );
    </script>
@endsection